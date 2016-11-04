:Build backend
dotnet restore ..\backend\project.json
dotnet publish ..\backend -o ..\publish
mkdir ..\publish\wwwroot
mkdir ..\publish\database
mkdir ..\publish\database\admin


:Build frontend
:Copy frontend

cd ..\frontend
call npm install
call ng build --prod --output-path ..\publish\wwwroot


:Zip everything
"c:\Program Files\7-Zip\7z.exe" a -r -t7z ..\release.7z ..\publish\*.*

:cleanup
rmdir ..\publish /S /Q



:Extract tools
"c:\Program Files\7-Zip\7z.exe" x ..\build\tools.7z -o..\build

:..\build\tools\pscp.exe -i "C:\pscp\Alfadock_Linux.ppk" "..\release.7z" ubuntu@52.199.13.255:/usr/apps/release

:Deploy
:..\build\tools\putty.exe -ssh ubuntu@52.199.13.255 -i "C:\pscp\Alfadock_Linux.ppk" -m "..\build\deploy.txt"