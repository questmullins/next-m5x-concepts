param(
  [string]$PagePath = "/"
)

$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$nodeRoot = "G:\GITHUB\Clients\next-m5x-concepts\.tools\node-v24.16.0-win-x64"
$npm = Join-Path $nodeRoot "npm.cmd"
$port = 3000
$normalizedPath = if ($PagePath.StartsWith("/")) { $PagePath } else { "/$PagePath" }
$url = "http://127.0.0.1:$port$normalizedPath"

if (-not (Test-Path $npm)) {
  throw "Could not find npm at $npm"
}

$listener = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
if (-not $listener) {
  Start-Process -WindowStyle Hidden -FilePath $npm -ArgumentList @("run", "dev", "--", "--hostname", "127.0.0.1", "--port", "$port") -WorkingDirectory $projectRoot
  Start-Sleep -Seconds 4
}

Start-Process $url
