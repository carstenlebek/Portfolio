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
  Separator,
  Frame,
  MenuList,
  MenuListItem,
  ScrollView,
} from "react95";
import original from "react95/dist/themes/original";

const impressumText = `Impressum
=========

Angaben gemaess § 5 TMG
------------------------
Carsten Lebek
Loehrerlen 19G
42279 Wuppertal


Kontakt
-------
E-Mail: carsten.lebek@gmail.com


Umsatzsteuer-ID
---------------
Umsatzsteuer-Identifikationsnummer
gemaess § 27 a Umsatzsteuergesetz:
DE311134429


Verbraucherstreitbeilegung /
Universalschlichtungsstelle
----------------------------
Wir sind nicht bereit oder verpflichtet,
an Streitbeilegungsverfahren vor einer
Verbraucherschlichtungsstelle
teilzunehmen.


---
Quelle: eRecht24 (https://www.e-recht24.de)
`;

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

  @media (max-width: 600px) {
    .desktop-pad {
      padding: 4px !important;
      padding-bottom: 44px !important;
    }
  }
`;

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

export default function Impressum() {
  const [startOpen, setStartOpen] = useState(false);
  const [wordWrap, setWordWrap] = useState(true);
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

  const lines = impressumText.split("\n").length;
  const chars = impressumText.length;

  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />

      <div className="desktop-pad" style={{ padding: 16, paddingBottom: 48, maxWidth: 620, margin: "0 auto" }}>
        <Window style={{ width: "100%" }}>
          <WindowHeader>
            <span>impressum.txt – Editor</span>
          </WindowHeader>

          <Toolbar>
            <Button
              variant="menu"
              size="sm"
              onClick={() => window.location.href = "mailto:carsten.lebek@gmail.com"}
            >
              E-Mail senden
            </Button>
            <Separator orientation="vertical" size="22px" />
            <Button
              variant="menu"
              size="sm"
              onClick={() => setWordWrap(!wordWrap)}
            >
              {wordWrap ? "Zeilenumbruch: An" : "Zeilenumbruch: Aus"}
            </Button>
          </Toolbar>

          <WindowContent style={{ padding: 0 }}>
            <textarea
              readOnly
              value={impressumText}
              style={{
                width: "100%",
                height: 420,
                border: "none",
                padding: 8,
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: 13,
                lineHeight: 1.4,
                resize: "none",
                outline: "none",
                background: "#fff",
                color: "#000",
                whiteSpace: wordWrap ? "pre-wrap" : "pre",
                overflowX: wordWrap ? "hidden" : "auto",
                boxSizing: "border-box",
              }}
            />
          </WindowContent>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "2px 4px",
            borderTop: "1px solid #888",
            fontSize: 11,
            background: "#c0c0c0",
          }}>
            <Frame variant="well" style={{ padding: "1px 6px", flex: 1 }}>
              Zeilen: {lines} | Zeichen: {chars}
            </Frame>
          </div>
        </Window>
      </div>

      <AppBar style={{ position: "fixed", bottom: 0, top: "auto", left: 0, right: 0, zIndex: 100 }}>
        <Toolbar style={{ justifyContent: "space-between", padding: "2px 4px" }}>
          <div style={{ display: "flex", gap: 3, alignItems: "center", position: "relative", overflow: "hidden", flex: 1, minWidth: 0 }} ref={startRef}>
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
                <MenuListItem onClick={() => { window.location.href = "/"; setStartOpen(false); }}>
                  Portfolio
                </MenuListItem>
                <Separator />
                <MenuListItem onClick={() => { window.location.href = "mailto:carsten.lebek@gmail.com"; setStartOpen(false); }}>
                  E-Mail senden
                </MenuListItem>
                <MenuListItem onClick={() => { window.open("https://github.com/carstenlebek", "_blank"); setStartOpen(false); }}>
                  GitHub
                </MenuListItem>
                <MenuListItem onClick={() => { window.open("https://www.linkedin.com/in/carsten-lebek-634899229/", "_blank"); setStartOpen(false); }}>
                  LinkedIn
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
              style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
              onClick={() => window.location.href = "/"}
            >
              portfolio.exe
            </Button>
            <Button
              active
              style={{ fontWeight: "bold", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
