export default function classnames(...args: any[]) {
  return args.filter(Boolean).join(' ')
}
