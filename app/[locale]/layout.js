export default async function LocaleLayout({ children, params }) {
  await params;
  return children;
}