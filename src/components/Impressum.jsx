import React from "react";
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

export default function Impressum() {
  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />

      <div style={{ padding: "16px", paddingBottom: "48px", maxWidth: 620, margin: "0 auto" }}>
        <Window style={{ width: "100%" }}>
          <WindowHeader style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>impressum.txt – Editor</span>
            <div style={{ display: "flex", gap: "2px" }}>
              <Button size="sm" square>
                <span style={{ fontWeight: "bold", transform: "translateY(-1px)", display: "inline-block" }}>_</span>
              </Button>
              <Button size="sm" square>
                <span style={{ fontWeight: "bold", transform: "translateY(-1px)", display: "inline-block" }}>□</span>
              </Button>
              <Button size="sm" square>
                <span style={{ fontWeight: "bold", transform: "translateY(-1px)", display: "inline-block" }}>×</span>
              </Button>
            </div>
          </WindowHeader>

          <Toolbar>
            <Button variant="menu" size="sm">Datei</Button>
            <Button variant="menu" size="sm">Bearbeiten</Button>
            <Button variant="menu" size="sm">Hilfe</Button>
          </Toolbar>

          <WindowContent>
            <div style={{ marginBottom: 12 }}>
              <Button onClick={() => window.location.href = "/"}>
                ← Zurueck zur Startseite
              </Button>
            </div>

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
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <Button style={{ fontWeight: "bold" }}>Start</Button>
            <Separator orientation="vertical" size="35px" />
            <Button active style={{ fontWeight: "bold" }}>
              impressum.txt
            </Button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Frame variant="well" style={{ padding: "2px 8px", fontSize: 12 }}>
              {new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })}
            </Frame>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
