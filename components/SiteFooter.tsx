import Link from "next/link";
import { LogoMark } from "./Logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div className="footer__cols">
          <div className="footer__col">
            <div className="footer__name">
              <LogoMark />
              {site.legalName}
            </div>
            <p className="footer__text">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
            </p>
          </div>
          <div className="footer__col">
            <h3 className="footer__heading">Address</h3>
            <p className="footer__text">
              {site.addressLines[0]}
              <br />
              {site.addressLines[1]}
            </p>
          </div>
          <div className="footer__col">
            <h3 className="footer__heading">Legal</h3>
            <ul className="footer__links">
              <li>
                <Link href="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link href="/terms">Terms &amp; Condition</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__copy">{site.copyright}</p>
      </div>
    </footer>
  );
}
