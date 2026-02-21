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
  GroupBox,
  Separator,
  Anchor,
  Frame,
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

      <div style={{ padding: "16px", paddingBottom: "48px", maxWidth: 620, margin: "0 auto" }}>
        <Window style={{ width: "100%" }}>
          <WindowHeader>
            <span>impressum.txt – Editor</span>
          </WindowHeader>

          <Toolbar>
            <Button variant="menu" size="sm" onClick={() => window.location.href = "/"}>
              Zurueck
            </Button>
            <Separator orientation="vertical" size="22px" />
            <Button variant="menu" size="sm" onClick={() => window.location.href = "mailto:carsten.lebek@gmail.com"}>
              E-Mail
            </Button>
          </Toolbar>

          <WindowContent>
            <GroupBox label="Angaben gemaess § 5 TMG">
              <p style={{ margin: "4px 0" }}>Carsten Lebek</p>
              <p style={{ margin: "4px 0" }}>Loehrerlen 19G</p>
              <p style={{ margin: "4px 0" }}>42279 Wuppertal</p>
            </GroupBox>

            <br />

            <GroupBox label="Kontakt">
              <p style={{ margin: "4px 0" }}>
                E-Mail: <Anchor href="mailto:carsten.lebek@gmail.com">carsten.lebek@gmail.com</Anchor>
              </p>
            </GroupBox>

            <br />

            <GroupBox label="Umsatzsteuer-ID">
              <p style={{ margin: "4px 0" }}>
                Umsatzsteuer-Identifikationsnummer gemaess § 27 a Umsatzsteuergesetz:
              </p>
              <p style={{ margin: "4px 0" }}><strong>DE311134429</strong></p>
            </GroupBox>

            <br />

            <GroupBox label="Verbraucherstreitbeilegung">
              <p style={{ margin: "4px 0" }}>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </GroupBox>

            <Separator style={{ margin: "16px 0" }} />

            <p style={{ fontSize: 11, color: "#808080" }}>
              Quelle: <Anchor href="https://www.e-recht24.de" target="_blank">eRecht24</Anchor>
            </p>
          </WindowContent>
        </Window>
      </div>

      <AppBar style={{ position: "fixed", bottom: 0, top: "auto", left: 0, right: 0, zIndex: 100 }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 4, alignItems: "center", position: "relative" }} ref={startRef}>
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
