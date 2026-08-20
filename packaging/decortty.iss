; DecoRTTY — script di installazione per Inno Setup 6.
;
; Costruisce un installatore a partire dalla cartella dist/, quella che
; scripts/deploy.sh mette insieme: eseguibili, librerie Qt, moduli QML e il
; qt.conf che dice a Qt dove cercarli. Se dist/ non e' aggiornata l'installatore
; distribuisce una versione vecchia senza dirlo, quindi si compila cosi':
;
;     bash scripts/deploy.sh
;     "C:\Program Files (x86)\Inno Setup 6\ISCC.exe" packaging\decortty.iss
;
; Due scelte che vale la pena spiegare.
;
; L'installazione non richiede privilegi di amministratore: per impostazione
; predefinita va nella cartella dell'utente, e chi vuole metterla in Programmi
; per tutti puo' chiederlo dalla prima schermata. Un programma che si limita a
; leggere una scheda audio e una porta seriale non ha ragione di farsi dare le
; chiavi della macchina.
;
; La disinstallazione non tocca il registro dei collegamenti ne' le impostazioni.
; Un log ADIF e' il lavoro di anni di serate, e un disinstallatore che se lo
; porta via perche' "pulisce" fa un danno che nessuna comodita' ripaga.

#define AppName        "DecoRTTY"
#define AppVersion     "0.4.0"
#define AppPublisher   "IU8LMC — Martino Merola"
#define AppURL         "https://github.com/iu8lmc/decortty"
#define AppExe         "decortty.exe"
#define GatewayExe     "decortty-ft991.exe"
#define SourceDir      "..\dist"

[Setup]
; Identificatore stabile: e' quello che permette a una versione nuova di
; riconoscere e sostituire quella installata invece di affiancarsi.
AppId={{7C4E1F2A-9B3D-4A56-8E71-DEC0RTTY0001}
AppName={#AppName}
AppVersion={#AppVersion}
AppVerName={#AppName} {#AppVersion}
AppPublisher={#AppPublisher}
AppPublisherURL={#AppURL}
AppSupportURL={#AppURL}/issues
AppUpdatesURL={#AppURL}/releases
VersionInfoVersion={#AppVersion}
VersionInfoDescription=RTTY moderno su trasporto VITA-49

DefaultDirName={autopf}\{#AppName}
DefaultGroupName={#AppName}
DisableProgramGroupPage=yes
AllowNoIcons=yes

PrivilegesRequired=lowest
PrivilegesRequiredOverridesAllowed=dialog commandline

OutputDir=..\dist-installer
OutputBaseFilename={#AppName}-{#AppVersion}-setup
SetupIconFile=..\resources\decortty.ico
UninstallDisplayIcon={app}\{#AppExe}
UninstallDisplayName={#AppName} {#AppVersion}

Compression=lzma2/max
SolidCompression=yes
WizardStyle=modern
ArchitecturesAllowed=x64compatible
ArchitecturesInstallIn64BitMode=x64compatible

; Un aggiornamento su un'installazione in uso lascerebbe indietro file bloccati,
; e la prossima partenza fallirebbe in un modo difficile da capire. Meglio
; chiedere di chiudere.
CloseApplications=yes
RestartApplications=no

LicenseFile=
InfoBeforeFile=

[Languages]
Name: "italiano"; MessagesFile: "compiler:Languages\Italian.isl"
Name: "english";  MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
; Tutta la cartella distribuita. Il log del gateway non entra: e' un residuo
; delle prove, e da installato viene scritto nella cartella dati dell'utente.
Source: "{#SourceDir}\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs; Excludes: "*.log"

[Icons]
Name: "{group}\{#AppName}"; Filename: "{app}\{#AppExe}"; Comment: "Decodificatore RTTY su VITA-49"
; Il gateway ha una voce sua: serve solo a chi tiene la radio su un altro PC,
; perche' nell'uso normale lo apre e lo chiude il programma principale.
Name: "{group}\Gateway FT-991A (solo se la radio e' su un altro PC)"; Filename: "{app}\{#GatewayExe}"
Name: "{group}\{cm:UninstallProgram,{#AppName}}"; Filename: "{uninstallexe}"
Name: "{autodesktop}\{#AppName}"; Filename: "{app}\{#AppExe}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#AppExe}"; Description: "{cm:LaunchProgram,{#AppName}}"; Flags: nowait postinstall skipifsilent

[UninstallDelete]
; Il gateway e l'applicazione scrivono qui mentre lavorano; sono file di
; servizio, non dati dell'operatore.
Type: files; Name: "{app}\*.log"
Type: dirifempty; Name: "{app}"

[Code]
// Se il programma o il gateway sono in esecuzione, l'aggiornamento lascerebbe
// file bloccati. Inno se ne accorge da solo grazie a CloseApplications, ma il
// gateway non ha finestre e quel meccanismo non lo vede: va chiuso a parte.
function InitializeSetup(): Boolean;
var
  ResultCode: Integer;
begin
  Exec(ExpandConstant('{cmd}'), '/C taskkill /IM decortty-ft991.exe /F',
       '', SW_HIDE, ewWaitUntilTerminated, ResultCode);
  Result := True;
end;

function InitializeUninstall(): Boolean;
var
  ResultCode: Integer;
begin
  Exec(ExpandConstant('{cmd}'), '/C taskkill /IM decortty-ft991.exe /F',
       '', SW_HIDE, ewWaitUntilTerminated, ResultCode);
  Result := True;
end;
