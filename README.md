.TH CCWC 1 "2023-11-21" "1.0" "ccwc man page"
.SH NAME
ccwc \- Unix word counting tool
.SH SYNOPSIS
.B ccwc
[\fIOPTION\fP] [\fIFILE\fP]
.SH DESCRIPTION
The
.B ccwc
command is a Unix word counting tool. It can output the number of bytes, lines, words, and characters in a file.
.SH OPTIONS
.TP
.B \-c
Outputs the number of bytes in a file.
.TP
.B \-l
Outputs the number of lines in a file.
.TP
.B \-w
Outputs the number of words in a file.
.TP
.B \-m
Outputs the number of characters in a file.
.SH EXAMPLES
.TP
.B ccwc \-c file.txt
Display the number of bytes in file.txt.
.TP
.B ccwc \-l file.txt
Display the number of lines in file.txt.
.SH SEE ALSO
.BR wc (1)
.SH AUTHOR
Johanna S.
