import React, { useState, useRef, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  styleReset,
  Window,
  WindowHeader,
  WindowContent,
  Button,
  Toolbar,
  AppBar,
  Tab,
  TabBody,
  Tabs,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TreeView,
  GroupBox,
  Frame,
  Separator,
  MenuList,
  MenuListItem,
} from "react95";
import original from "react95/dist/themes/original";

const GlobalStyles = createGlobalStyle`
  ${styleReset}

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('/assets/fonts/ms_sans_serif.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('/assets/fonts/ms_sans_serif_bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  html, body {
    overscroll-behavior: none;
  }

  body {
    font-family: 'ms_sans_serif', Arial, sans-serif;
    background-color: #008080;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  a {
    color: #0000ff;
  }

  a:visited {
    color: #800080;
  }

  .bsod {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: #0000aa;
    color: #fff;
    font-family: 'Courier New', monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .bsod-inner {
    max-width: 600px;
    padding: 24px;
    text-align: center;
    font-size: 14px;
    line-height: 1.6;
  }

  .bsod-title {
    background: #aaaaaa;
    color: #0000aa;
    padding: 2px 8px;
    display: inline-block;
    margin-bottom: 16px;
  }

  .crt-img {
    image-rendering: pixelated;
    filter: contrast(1.1) brightness(0.92) saturate(1.4);
  }

  .crt-wrapper {
    position: relative;
    display: inline-block;
    overflow: hidden;
    line-height: 0;
  }

  .crt-wrapper::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.12) 0px,
      rgba(0, 0, 0, 0.12) 1px,
      transparent 1px,
      transparent 3px
    );
    pointer-events: none;
  }

  @media (max-width: 600px) {
    .desktop-pad {
      padding: 4px !important;
      padding-bottom: 44px !important;
    }

    .toolbar-scroll {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      flex-wrap: nowrap !important;
    }

    .cert-card {
      width: calc(50% - 8px) !important;
    }

    .about-portrait {
      width: 100px !important;
    }
  }
`;

const projects = [
  { name: "Crazy JUMP Wuppertal", type: "Webseite", url: "https://www.crazy-jump.de", desc: "Trampolinpark mit Sprung- und Bouncing-Attraktionen" },
  { name: "Alte Papierfabrik", type: "Webseite", url: "https://www.altepapierfabrik.eu", desc: "Historische Event-Location in Wuppertal" },
  { name: "KOKORO Einstreu", type: "Onlineshop", url: "https://kokoro-einstreu.de", desc: "Premium-Kokosfaser-Einstreu fuer Pferde" },
  { name: "Markflow", type: "Chrome Extension", url: "https://markflow.app", desc: "Web-Elemente kopieren und exportieren" },
  { name: "Allkokos.de", type: "Onlineshop", url: "https://allkokos.de", desc: "Kleintiereinstreu – komplettes Redesign" },
  { name: "Sport-Park", type: "Web App", url: "https://anmeldung.sport-park.de", desc: "Onlineanmeldung mit Next.js" },
  { name: "RSCards.de", type: "Onlineshop", url: "https://rscards.de", desc: "Autoquartettkarten, Shopify + Gatsby.js" },
  { name: "CreatorHub", type: "Shopify App", url: "https://apps.shopify.com/creator-code", desc: "Influencer-Verwaltung fuer Shopbetreiber" },
  { name: "deepi18n", type: "Web App", url: "https://deep-i18n.vercel.app/", desc: "Webseiten in 25 Sprachen uebersetzen" },
  { name: "Aposto Wuppertal", type: "Onlineshop", url: "https://apostowuppertal.de", desc: "Pizza und Pasta – Alternative zu Lieferando" },
];

const certificates = [
  { name: "FreeCodeCamp – JS Algorithms & Data Structures", img: "/assets/images/fcc_js_aads_badge.webp" },
  { name: "FreeCodeCamp – Front End Development Libraries", img: "/assets/images/fcc_fedl.webp" },
  { name: "FreeCodeCamp – Back End Development and APIs", img: "/assets/images/fcc_bedaa.webp" },
  { name: "Shopify – App Development", img: "/assets/images/sh_ad.webp" },
  { name: "Shopify – Business Fundamentals", img: "/assets/images/sh_bf.webp" },
  { name: "Shopify – Product Fundamentals", img: "/assets/images/sh_pf.webp" },
  { name: "OfG – Webdesign (Nr. 21142)", img: "/assets/images/certificate_webdesign_21142.webp" },
];

const linkUrls = {
  github: "https://github.com/carstenlebek",
  linkedin: "https://www.linkedin.com/in/carsten-lebek-634899229/",
  email: "mailto:carsten.lebek@gmail.com",
  impressum: "/impressum",
};

const treeData = [
  {
    id: "links",
    label: "Carsten Lebek",
    items: [
      { id: "github", label: "GitHub" },
      { id: "linkedin", label: "LinkedIn" },
      { id: "email", label: "E-Mail senden" },
      { id: "impressum", label: "Impressum" },
    ],
  },
];

function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [startOpen, setStartOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [bsod, setBsod] = useState(false);
  const [clock, setClock] = useState(
    new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })
  );

  const startRef = useRef(null);
  useClickOutside(startRef, () => setStartOpen(false));

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />

      {/* BSOD Easter Egg */}
      {bsod && (
        <div className="bsod" onClick={() => setBsod(false)}>
          <div className="bsod-inner">
            <span className="bsod-title">Windows</span>
            <br /><br />
            Ein schwerwiegender Ausnahmefehler ist in PORTFOLIO.EXE aufgetreten.
            Die aktuelle Anwendung wird beendet.
            <br /><br />
            * Druecken Sie eine beliebige Taste, um die Anwendung zu beenden.
            <br />
            * Druecken Sie STRG+ALT+ENTF, um den Computer neu zu starten.
            Alle nicht gespeicherten Daten gehen dabei verloren.
            <br /><br />
            Druecken Sie eine beliebige Taste, um fortzufahren _
          </div>
        </div>
      )}

      <div className="desktop-pad" style={{ padding: 16, paddingBottom: 48, maxWidth: 820, margin: "0 auto" }}>
        {/* About Dialog */}
        {aboutOpen && (
          <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.3)" }} onClick={() => setAboutOpen(false)}>
            <Window style={{ width: "90%", maxWidth: 340 }} onClick={(e) => e.stopPropagation()}>
              <WindowHeader style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Ueber portfolio.exe</span>
                <Button size="sm" square onClick={() => setAboutOpen(false)}>
                  <span style={{ fontWeight: "bold", transform: "translateY(-1px)", display: "inline-block" }}>×</span>
                </Button>
              </WindowHeader>
              <WindowContent>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: 16, fontWeight: "bold" }}>portfolio.exe</p>
                  <p>Version 95.0</p>
                  <Separator style={{ margin: "8px 0" }} />
                  <p>Erstellt von Carsten Lebek</p>
                  <p>Webentwickler aus Wuppertal</p>
                  <p style={{ fontSize: 11, color: "#808080", marginTop: 8 }}>
                    Gebaut mit React95 + Astro
                  </p>
                  <Separator style={{ margin: "8px 0" }} />
                  <Button onClick={() => setAboutOpen(false)}>OK</Button>
                </div>
              </WindowContent>
            </Window>
          </div>
        )}

        {/* Main Window */}
        <Window style={{ width: "100%" }}>
          <WindowHeader>
            <span>portfolio.exe</span>
          </WindowHeader>

          <Toolbar>
            <Button variant="menu" size="sm" onClick={() => setAboutOpen(true)}>
              Hilfe
            </Button>
          </Toolbar>

          <WindowContent style={{ padding: "8px" }}>
            <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
              <Tab value={0}>Info</Tab>
              <Tab value={1}>Projekte</Tab>
              <Tab value={2}>Zertifikate</Tab>
              <Tab value={3}>Links</Tab>
            </Tabs>

            <TabBody style={{ minHeight: 260 }}>
              {/* TAB 0: About */}
              {activeTab === 0 && (
                <div>
                  <GroupBox label="Ueber mich">
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                      <div className="crt-wrapper">
                        <img
                          src="/assets/images/portrait.webp"
                          alt="Carsten Lebek"
                          width={150}
                          className="crt-img about-portrait"
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: 160 }}>
                        <p style={{ marginTop: 0 }}><strong>Carsten Lebek</strong></p>
                        <p>Senior Fullstack-Entwickler, Wuppertal</p>
                        <Separator />
                        <p>
                          2016 mit E-Commerce gestartet — eigene Onlineshops aufgebaut
                          und dabei schrittweise vom Shopbetreiber zum Entwickler geworden.
                          Ueber die Jahre verschiedene Projekte umgesetzt: Print on Demand,
                          Shopify-Themes, Chrome Extensions, eigene Shopify-Apps und
                          diverse Kundenauftraege im E-Commerce-Bereich.
                        </p>
                        <p>
                          Aktuell Senior Fullstack-Entwickler bei{" "}
                          <a href="https://memberr.de" target="_blank" rel="noopener">memberr</a>,
                          einer Loyalty-Plattform fuer E-Commerce mit 400+ Kunden
                          (Shopify Plus Partner). Stack: React, Next.js, TypeScript, Shopify.
                        </p>
                      </div>
                    </div>
                  </GroupBox>
                </div>
              )}

              {/* TAB 1: Projects */}
              {activeTab === 1 && (
                <div>
                  <GroupBox label="Projekte">
                    <p style={{ fontSize: 12, color: "#808080", margin: "0 0 6px" }}>Antippen zum Auswaehlen, Oeffnen-Button zum Besuchen.</p>
                    <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableHeadCell>Name</TableHeadCell>
                            <TableHeadCell>Typ</TableHeadCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {projects.map((p, i) => (
                            <TableRow
                              key={p.name}
                              style={{
                                cursor: "pointer",
                                background: selectedProject === i ? "#000080" : "transparent",
                                color: selectedProject === i ? "#fff" : "inherit",
                              }}
                              onClick={() => setSelectedProject(i)}
                              onDoubleClick={() => window.open(p.url, "_blank")}
                            >
                              <TableDataCell style={{ whiteSpace: "nowrap" }}>{p.name}</TableDataCell>
                              <TableDataCell style={{ whiteSpace: "nowrap" }}>{p.type}</TableDataCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    {selectedProject !== null && (
                      <Frame variant="well" style={{ padding: 6, marginTop: 8, fontSize: 12 }}>
                        <strong>{projects[selectedProject].name}</strong>
                        <br />
                        {projects[selectedProject].desc}
                      </Frame>
                    )}
                    <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <Button
                        disabled={selectedProject === null}
                        onClick={() => selectedProject !== null && window.open(projects[selectedProject].url, "_blank")}
                      >
                        Oeffnen
                      </Button>
                      <span style={{ lineHeight: "28px", fontSize: 11, color: "#808080", wordBreak: "break-all" }}>
                        {selectedProject !== null
                          ? projects[selectedProject].url
                          : ""}
                      </span>
                    </div>
                  </GroupBox>
                </div>
              )}

              {/* TAB 2: Certificates */}
              {activeTab === 2 && (
                <div>
                  <GroupBox label="Zertifikate">
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                      {certificates.map((c) => (
                        <Frame
                          key={c.name}
                          variant="well"
                          className="cert-card"
                          style={{ padding: 4, textAlign: "center", width: 170 }}
                        >
                          <div className="crt-wrapper" style={{ width: "100%" }}>
                            <img
                              src={c.img}
                              alt={c.name}
                              className="crt-img"
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                          <p style={{ fontSize: 10, margin: "4px 0 0", lineHeight: 1.2 }}>{c.name}</p>
                        </Frame>
                      ))}
                    </div>
                  </GroupBox>
                </div>
              )}

              {/* TAB 3: Links */}
              {activeTab === 3 && (
                <div>
                  <GroupBox label="Links">
                    <TreeView
                      tree={treeData}
                      defaultExpanded={["links"]}
                      onNodeSelect={(e, id) => {
                        const url = linkUrls[id];
                        if (url) {
                          if (url.startsWith("mailto:") || url.startsWith("/")) {
                            window.location.href = url;
                          } else {
                            window.open(url, "_blank");
                          }
                        }
                      }}
                    />
                  </GroupBox>
                </div>
              )}
            </TabBody>
          </WindowContent>
        </Window>

      </div>

      {/* Taskbar */}
      <AppBar style={{ position: "fixed", bottom: 0, top: "auto", left: 0, right: 0, zIndex: 100 }}>
        <Toolbar style={{ justifyContent: "space-between", padding: "2px 4px" }}>
          <div style={{ display: "flex", gap: 3, alignItems: "center", position: "relative", flex: 1, minWidth: 0 }} ref={startRef}>
            {/* Start Menu */}
            {startOpen && (
              <MenuList
                style={{
                  position: "absolute",
                  bottom: "100%",
                  left: 0,
                  marginBottom: 4,
                  width: 200,
                  zIndex: 200,
                }}
              >
                <MenuListItem onClick={() => { setActiveTab(0); setStartOpen(false); window.scrollTo(0, 0); }}>
                  Info
                </MenuListItem>
                <MenuListItem onClick={() => { setActiveTab(1); setStartOpen(false); window.scrollTo(0, 0); }}>
                  Projekte
                </MenuListItem>
                <MenuListItem onClick={() => { setActiveTab(2); setStartOpen(false); window.scrollTo(0, 0); }}>
                  Zertifikate
                </MenuListItem>
                <MenuListItem onClick={() => { setActiveTab(3); setStartOpen(false); window.scrollTo(0, 0); }}>
                  Links
                </MenuListItem>
                <Separator />
                <MenuListItem onClick={() => { window.location.href = "/impressum"; setStartOpen(false); }}>
                  Impressum
                </MenuListItem>
                <MenuListItem onClick={() => { setAboutOpen(true); setStartOpen(false); }}>
                  Hilfe
                </MenuListItem>
                <Separator />
                <MenuListItem onClick={() => { setBsod(true); setStartOpen(false); }}>
                  Herunterfahren...
                </MenuListItem>
              </MenuList>
            )}

            <Button
              style={{ fontWeight: "bold", flexShrink: 0 }}
              active={startOpen}
              onClick={() => setStartOpen(!startOpen)}
            >
              Start
            </Button>
            <Separator orientation="vertical" size="35px" />
            <Button
              active
              style={{ fontWeight: "bold", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              portfolio.exe
            </Button>
            <Button
              style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
              onClick={() => window.location.href = "/impressum"}
            >
              impressum.txt
            </Button>
          </div>
          <Frame variant="well" style={{ padding: "2px 6px", fontSize: 11, flexShrink: 0, marginLeft: 4 }}>
            {clock}
          </Frame>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
