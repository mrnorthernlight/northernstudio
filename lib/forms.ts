const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const TOPICS = ["ai", "software", "automation", "products", "other"] as const;
export const SLOTS = ["general", "slot-01", "slot-02", "slot-03"] as const;

export type FieldCode = "required" | "email" | "short" | "long" | "invalid";
export type LocaleCode = "nl" | "en";

export function text(value: unknown) {
  if (typeof value !== "string") return "";
  return value.replace(/\u0000/g, "").trim();
}

export function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, 140);
}

export function isEmail(value: string) {
  return value.length <= 200 && EMAIL.test(value);
}

export type ContactFields = {
  intent: "message" | "business";
  name: string;
  email: string;
  organisation: string;
  message: string;
  topic: string;
  locale: LocaleCode;
  honeypot: string;
};

export function readContact(data: Record<string, string>): ContactFields {
  return {
    intent: data.intent === "business" ? "business" : "message",
    name: text(data.name),
    email: text(data.email),
    organisation: text(data.organisation),
    message: text(data.message),
    topic: text(data.topic),
    locale: data.locale === "en" ? "en" : "nl",
    honeypot: text(data.company_website),
  };
}

export function validateContact(input: ContactFields) {
  const fields: Record<string, FieldCode> = {};
  if (input.name.length < 2) fields.name = "required";
  else if (input.name.length > 120) fields.name = "long";

  if (!input.email) fields.email = "required";
  else if (!isEmail(input.email)) fields.email = "email";

  if (input.intent === "business" && input.organisation.length < 2) fields.organisation = "required";
  else if (input.organisation.length > 160) fields.organisation = "long";

  if (!input.message) fields.message = "required";
  else if (input.message.length < 20) fields.message = "short";
  else if (input.message.length > 4000) fields.message = "long";

  if (input.topic && !TOPICS.includes(input.topic as (typeof TOPICS)[number])) fields.topic = "invalid";

  return fields;
}

export type InterestFields = {
  slot: string;
  name: string;
  email: string;
  note: string;
  locale: LocaleCode;
  honeypot: string;
};

export function readInterest(data: Record<string, string>): InterestFields {
  return {
    slot: text(data.slot),
    name: text(data.name),
    email: text(data.email),
    note: text(data.note),
    locale: data.locale === "en" ? "en" : "nl",
    honeypot: text(data.company_website),
  };
}

export function validateInterest(input: InterestFields) {
  const fields: Record<string, FieldCode> = {};
  if (!SLOTS.includes(input.slot as (typeof SLOTS)[number])) fields.slot = "invalid";
  if (input.name && input.name.length < 2) fields.name = "short";
  else if (input.name.length > 120) fields.name = "long";
  if (!input.email) fields.email = "required";
  else if (!isEmail(input.email)) fields.email = "email";
  if (input.note.length > 1000) fields.note = "long";
  return fields;
}

export function contactMail(input: ContactFields) {
  const kind = input.intent === "business" ? "Business enquiry" : "Message";
  const lines = [
    `${kind} via northernstudio.be`,
    `Locale: ${input.locale}`,
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Organisation: ${input.organisation || "—"}`,
    `Topic: ${input.topic || "—"}`,
    "",
    input.message,
  ];
  return {
    subject: `[Northern Studio] ${kind} — ${oneLine(input.name)}`,
    text: lines.join("\n"),
    replyTo: input.email,
  };
}

export function interestMail(input: InterestFields) {
  const lines = [
    "Product interest via northernstudio.be",
    `Locale: ${input.locale}`,
    `Slot: ${input.slot}`,
    `Name: ${input.name || "—"}`,
    `Email: ${input.email}`,
    "",
    input.note || "—",
  ];
  return {
    subject: `[Northern Studio] Product interest — ${oneLine(input.email)}`,
    text: lines.join("\n"),
    replyTo: input.email,
  };
}
