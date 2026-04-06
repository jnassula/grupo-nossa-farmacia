import Link from "next/link";
import { content } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <img
                src="https://nossafarmacia.vtexassets.com/assets/vtex.file-manager-graphql/images/f432f301-b5fa-4453-aa24-22ea02396e16___13e59f7056915bc23b198375758778f6.png"
                alt="Grupo Nossa Farmácia"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Unimos farmácias independentes sob uma identidade forte, 
              potenciando o poder coletivo para um futuro mais próspero.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {content.footer.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {content.footer.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {content.footer.copyright}
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { name: "Instagram", icon: "M16 4h2a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m4 8a4 4 0 100-8 4 4 0 000 8zm6 2a2 2 0 100-4 2 2 0 000 4z" },
              { name: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z" },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label={social.name}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}