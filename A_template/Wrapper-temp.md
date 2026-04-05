<%\*

//get selection

noteContent = tp.file.selection();

//get array of lines

lines = noteContent.split('\\n')

//make a new string with > prepended to each line

let newContent = "";

lines.forEach(l => {

&#x09;newContent += '> ' + l + "\\n";

})

//remove the last newline character

newContent = newContent.replace(/\\n$/, "");

//define callout header

header = "> \[!quote]-\\n"

// Return the complete callout block

return header + newContent;

%>

