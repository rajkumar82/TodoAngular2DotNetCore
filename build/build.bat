:Build backend
dotnet restore ..\backend\project.json
dotnet publish ..\backend -o ..\publish
mkdir ..\publish\wwwroot
mkdir ..\publish\database
mkdir ..\publish\database\admin


:Build frontend
:Copy frontend

cd ..\frontend
:call npm install
call ng build --prod --output-path ..\publish\wwwroot


:Zip everything
"c:\Program Files\7-Zip\7z.exe" a -r -t7z ..\todoangulardotnetcore.7z ..\publish\*.*

:cleanup
rmdir ..\publish /S /Q



:Extract tools
"c:\Program Files\7-Zip\7z.exe" x ..\build\tools.7z -o..\build

..\build\tools\pscp.exe -i "c:\Rajkumar\Github\Aws\rajkumar_aws.ppk" "..\todoangulardotnetcore.7z" ubuntu@35.154.11.173:/var/apps

:Deploy
..\build\tools\putty.exe -ssh ubuntu@35.154.11.173 -i "c:\Rajkumar\Github\Aws\rajkumar_aws.ppk" -m "..\build\deploy.txt"

rmdir ..\build\tools /S /Q

cd ..\build