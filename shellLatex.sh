#!/bin/sh

cd "/home/aayush/Documents/Job Bewerbung"

if [ "$1" == "Software" ]; then
    pdflatex bewerbungsschreiben.tex
    pdflatex BewerbungsMappe.tex
    xdg-open bewerbungsschreiben.pdf
    xdg-open BewerbungsMappe.pdf
    echo $1
elif [ "$1" == "Werkstudent" ]; then
    pdflatex WS_bewerbungsschreiben.tex
    xdg-open WS_bewerbungsschreiben.pdf
else
    echo "Positional parameter 1 is empty"
    pdflatex E_bewerbungsschreiben.tex
    pdflatex E_BewerbungsMappe.tex
    xdg-open E_bewerbungsschreiben.pdf
    xdg-open E_BewerbungsMappe.pdf
    echo Elektro
fi

# set arg1=%1
# echo %arg1%
# cd "C:\Users\Aayush\Desktop\Job Bewerbung\"

# IF %arg1%==Software (
# pdflatex bewerbungsschreben.tex
# pdflatex BewerbungsMappe.tex
# bewerbungsschreben.pdf
# BewerbungsMappe.pdf
# echo Software
# ) ELSE (
#     pdflatex E_bewerbungsschreben.tex
#     pdflatex E_BewerbungsMappe.tex
#     E_bewerbungsschreben.pdf
#     E_BewerbungsMappe.pdf
#     echo Elektro
# )

# exit