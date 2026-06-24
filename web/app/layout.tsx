import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pokolenie, którego nie ma - raport o demografii i przyszłości klubów sportowych | ProgramyDlaKlubow.pl",
  description: "Rodzi się trzy razy mniej dzieci niż w latach 80. Pierwszy w Polsce raport o tym, co spadek liczby dzieci zrobi z Twoim klubem lub akademią. Pobierz bezpłatnie (PDF).",
  openGraph: {
    title: "Pokolenie, którego nie ma",
    description: "Za 8 lat do akademii zapuka o ponad 40% mniej dzieci. Bezpłatny raport PDF.",
    images: [{ url: "/okladka-A4.webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="min-h-screen">
        {children}
        <Script id="easy-em-snippet" strategy="afterInteractive">
          {`
            (function() {
              var domains = ["cart.easy.tools","app.easy.tools","easl.ink"];
              var cookieHours = 72;
              var cookieName = 'em_id';
              var refCookieName = 'ref';

              function getUrlParam(name) {
                var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
                return match && decodeURIComponent(match[1].replace(/\\+/g, ' '));
              }

              function setCookie(name, value, hours) {
                var d = new Date();
                d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
                document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path=/';
              }

              function getCookie(name) {
                var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
                return match ? match[2] : null;
              }

              function getTrackingParams() {
                var emId = getUrlParam(cookieName);
                if (emId) {
                  setCookie(cookieName, emId, cookieHours);
                } else {
                  emId = getCookie(cookieName);
                }

                var refParam = getUrlParam(refCookieName);
                if (refParam) {
                  setCookie(refCookieName, refParam, cookieHours);
                } else {
                  refParam = getCookie(refCookieName);
                }

                return { emId: emId, refParam: refParam };
              }

              function processLink(link, params) {
                var href = link.getAttribute('href');
                if (!href || link.hasAttribute('data-em-processed')) return;

                var matches = false;
                for (var j = 0; j < domains.length; j++) {
                  if (href.indexOf(domains[j]) !== -1) {
                    matches = true;
                    break;
                  }
                }

                if (matches) {
                  var newHref = href;

                  if (params.emId && newHref.indexOf('em_id=') === -1) {
                    var separator = newHref.indexOf('?') !== -1 ? '&' : '?';
                    newHref = newHref + separator + 'em_id=' + encodeURIComponent(params.emId);
                  }

                  if (params.refParam && newHref.indexOf(refCookieName + '=') === -1) {
                    var separator = newHref.indexOf('?') !== -1 ? '&' : '?';
                    newHref = newHref + separator + refCookieName + '=' + encodeURIComponent(params.refParam);
                  }

                  if (newHref !== href) {
                    link.setAttribute('href', newHref);
                  }
                }
                link.setAttribute('data-em-processed', 'true');
              }

              function processLinks() {
                var params = getTrackingParams();
                if (!params.emId && !params.refParam) return;

                var links = document.querySelectorAll('a[href]:not([data-em-processed])');
                for (var i = 0; i < links.length; i++) {
                  processLink(links[i], params);
                }
              }

              function startObserver() {
                var observer = new MutationObserver(function(mutations) {
                  var params = getTrackingParams();
                  if (!params.emId && !params.refParam) return;

                  for (var i = 0; i < mutations.length; i++) {
                    var mutation = mutations[i];
                    for (var j = 0; j < mutation.addedNodes.length; j++) {
                      var node = mutation.addedNodes[j];
                      if (node.nodeType === 1) {
                        if (node.tagName === 'A' && node.hasAttribute('href')) {
                          processLink(node, params);
                        }
                        if (node.querySelectorAll) {
                          var links = node.querySelectorAll('a[href]:not([data-em-processed])');
                          for (var k = 0; k < links.length; k++) {
                            processLink(links[k], params);
                          }
                        }
                      }
                    }
                  }
                });

                observer.observe(document.body, {
                  childList: true,
                  subtree: true
                });
              }

              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                  processLinks();
                  startObserver();
                });
              } else {
                processLinks();
                startObserver();
              }

              var div = document.createElement('div');
              div.id = 'easy-em-snippet-loaded';
              div.style.cssText = 'display:none!important;position:absolute!important;';
              (document.body || document.documentElement).appendChild(div);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
