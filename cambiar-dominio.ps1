# Cambia la URL del sitio en canonical, Open Graph, datos estructurados, sitemap.xml y robots.txt.
# Uso (clic derecho > Ejecutar con PowerShell, o desde una consola):
#   powershell -ExecutionPolicy Bypass -File .\cambiar-dominio.ps1 -NuevoDominio "https://miusuario.github.io/mirepo"
#   powershell -ExecutionPolicy Bypass -File .\cambiar-dominio.ps1 -NuevoDominio "https://www.yamahasanjosedelguaviare.com"
param([Parameter(Mandatory = $true)][string]$NuevoDominio)

$root   = Split-Path -Parent $MyInvocation.MyCommand.Path
$utf8   = New-Object System.Text.UTF8Encoding($false)
$actual = ([IO.File]::ReadAllText("$root\dominio.txt")).Trim().TrimEnd('/')
$nuevo  = $NuevoDominio.Trim().TrimEnd('/')

$archivos = Get-ChildItem $root -Recurse -File -Include *.html, *.xml, *.txt | Where-Object { $_.Name -ne 'dominio.txt' }
$n = 0
foreach ($f in $archivos) {
    $t = [IO.File]::ReadAllText($f.FullName, [Text.Encoding]::UTF8)
    if ($t.Contains($actual)) {
        [IO.File]::WriteAllText($f.FullName, $t.Replace($actual, $nuevo), $utf8)
        $n++
    }
}
[IO.File]::WriteAllText("$root\dominio.txt", $nuevo, $utf8)
Write-Output "Dominio cambiado de $actual a $nuevo en $n archivos."
