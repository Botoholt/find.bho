import createMiddleware from "next-intl/middleware"
import { locales } from "./config/i18n.config"

export default createMiddleware({
  locales,
  localeDetection: true,
  localePrefix: "always",
  defaultLocale: "ru",
})

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
