export function getPath(fileList) {
  if (!fileList) return
  const {path, name} = fileList[0]
  return path.replace(name, '')
}
