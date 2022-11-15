function hyphenateWord(title){
  title = title.toLowerCase()
  title = title.replaceAll(" ","-")
  return title
}

export default hyphenateWord