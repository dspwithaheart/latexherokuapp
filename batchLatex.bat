set arg1=%1
echo %arg1%
cd "C:\Users\Aayush\Desktop\Job Bewerbung\"

IF %arg1%==Software (
pdflatex bewerbungsschreben.tex
pdflatex BewerbungsMappe.tex
bewerbungsschreben.pdf
BewerbungsMappe.pdf
echo Software
) ELSE (
    pdflatex E_bewerbungsschreben.tex
    pdflatex E_BewerbungsMappe.tex
    E_bewerbungsschreben.pdf
    E_BewerbungsMappe.pdf
    echo Elektro
)

exit