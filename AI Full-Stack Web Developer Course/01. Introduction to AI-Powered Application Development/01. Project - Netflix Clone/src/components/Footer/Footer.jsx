import styles from "./Footer.module.css";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const footerLinks = [
  ["Audio Description", "Investor Relations", "Legal Notices"],
  ["Help Centre", "Jobs", "Cookie Preferences"],
  ["Gift Cards", "Terms of Use", "Corporate Information"],
  ["Media Centre", "Privacy", "Contact Us"],
];

function Footer() {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
    },
    {
      icon: <FaYoutube />,
      label: "YouTube",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social media icons */}
        <div className={styles.socialIcons}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              className={styles.socialLink}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer link columns */}
        <div className={styles.linksGrid}>
          {footerLinks.map((column, index) => (
            <div className={styles.linkColumn} key={index}>
              {column.map((link) => (
                <a href="#" className={styles.footerLink} key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>© 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
