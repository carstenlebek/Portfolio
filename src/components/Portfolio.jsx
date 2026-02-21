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

  body {
    font-family: 'ms_sans_serif', Arial, sans-serif;
    background-color: #008080;
    margin: 0;
    padding: 0;
    min-height: 100vh;
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

      <div style={{ padding: "16px", paddingBottom: "48px", maxWidth: 820, margin: "0 auto" }}>
        {/* About Dialog */}
        {aboutOpen && (
          <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.3)" }} onClick={() => setAboutOpen(false)}>
            <Window style={{ width: 340 }} onClick={(e) => e.stopPropagation()}>
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
            <Button variant="menu" size="sm" onClick={() => window.location.href = "mailto:carsten.lebek@gmail.com"}>
              E-Mail
            </Button>
            <Button variant="menu" size="sm" onClick={() => window.open("https://github.com/carstenlebek", "_blank")}>
              GitHub
            </Button>
            <Button variant="menu" size="sm" onClick={() => window.open("https://www.linkedin.com/in/carsten-lebek-634899229/", "_blank")}>
              LinkedIn
            </Button>
            <Button variant="menu" size="sm" onClick={() => window.location.href = "/impressum"}>
              Impressum
            </Button>
            <Separator orientation="vertical" size="22px" />
            <Button variant="menu" size="sm" onClick={() => setAboutOpen(true)}>
              Hilfe
            </Button>
          </Toolbar>

          <WindowContent>
            <Tabs value={activeTab} onChange={(val) => setActiveTab(val)}>
              <Tab value={0}>Ueber mich</Tab>
              <Tab value={1}>Projekte</Tab>
              <Tab value={2}>Zertifikate</Tab>
              <Tab value={3}>Links</Tab>
            </Tabs>

            <TabBody style={{ minHeight: 300 }}>
              {/* TAB 0: About */}
              {activeTab === 0 && (
                <div>
                  <GroupBox label="Ueber mich">
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <div className="crt-wrapper">
                        <img
                          src="/assets/images/portrait.webp"
                          alt="Carsten Lebek"
                          width={150}
                          className="crt-img"
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: 200 }}>
                        <p style={{ marginTop: 0 }}><strong>Carsten Lebek</strong></p>
                        <p>Fullstack-Entwickler, Wuppertal</p>
                        <Separator />
                        <p>
                          Ich baue Webanwendungen und Onlineshops. Angefangen habe ich 2016
                          mit E-Commerce — erst als Shopbetreiber, dann zunehmend auf der
                          technischen Seite. Heute arbeite ich hauptsaechlich mit React,
                          Next.js, TypeScript und Shopify.
                        </p>
                        <p>
                          Schwerpunkte: Headless Commerce, individuelle Shopify-Apps,
                          Fullstack-Webentwicklung und API-Integrationen.
                        </p>
                      </div>
                    </div>
                  </GroupBox>
                </div>
              )}

              {/* TAB 1: Projects */}
              {activeTab === 1 && (
                <div>
                  <GroupBox label="Projekte – Doppelklick zum Oeffnen">
                    <div style={{ overflowX: "auto" }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableHeadCell>Name</TableHeadCell>
                            <TableHeadCell>Typ</TableHeadCell>
                            <TableHeadCell>Beschreibung</TableHeadCell>
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
                              <TableDataCell>{p.desc}</TableDataCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                      <Button
                        disabled={selectedProject === null}
                        onClick={() => selectedProject !== null && window.open(projects[selectedProject].url, "_blank")}
                      >
                        Oeffnen
                      </Button>
                      <span style={{ lineHeight: "28px", fontSize: 12, color: "#808080" }}>
                        {selectedProject !== null
                          ? projects[selectedProject].url
                          : "Waehle ein Projekt aus"}
                      </span>
                    </div>
                  </GroupBox>
                </div>
              )}

              {/* TAB 2: Certificates */}
              {activeTab === 2 && (
                <div>
                  <GroupBox label="Zertifikate">
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                      {certificates.map((c) => (
                        <Frame
                          key={c.name}
                          variant="well"
                          style={{ padding: 4, textAlign: "center", width: 180 }}
                        >
                          <div className="crt-wrapper" style={{ width: "100%" }}>
                            <img
                              src={c.img}
                              alt={c.name}
                              className="crt-img"
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                          <p style={{ fontSize: 11, margin: "4px 0 0", lineHeight: 1.3 }}>{c.name}</p>
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
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 4, alignItems: "center", position: "relative" }} ref={startRef}>
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
                  Ueber mich
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
                <MenuListItem onClick={() => { window.location.href = "mailto:carsten.lebek@gmail.com"; setStartOpen(false); }}>
                  E-Mail senden
                </MenuListItem>
                <MenuListItem onClick={() => { window.location.href = "/impressum"; setStartOpen(false); }}>
                  Impressum
                </MenuListItem>
              </MenuList>
            )}

            <Button
              style={{ fontWeight: "bold" }}
              active={startOpen}
              onClick={() => setStartOpen(!startOpen)}
            >
              Start
            </Button>
            <Separator orientation="vertical" size="35px" />
            <Button
              active
              style={{ fontWeight: "bold" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              portfolio.exe
            </Button>
            <Button
              onClick={() => window.location.href = "/impressum"}
            >
              impressum.txt
            </Button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Frame variant="well" style={{ padding: "2px 8px", fontSize: 12 }}>
              {clock}
            </Frame>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
