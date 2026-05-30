$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$nodeRoot = Join-Path $root ".tools\node-v24.16.0-win-x64"
$appRoot = Join-Path $root "next-m5x-concepts"
$npm = Join-Path $nodeRoot "npm.cmd"

if (!(Test-Path $npm)) {
  throw "Local Node runtime is missing. Expected npm at $npm."
}

$env:Path = "$nodeRoot;$env:Path"
Set-Location $appRoot
& $npm run dev -- --hostname 127.0.0.1 --port 3000
