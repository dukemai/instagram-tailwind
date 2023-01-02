import Header from "./Header"

export default function DetailLayout(props: {
  children: React.ReactNode,
  params: {
    slug?: string,
  },
}) {
  return (
    <div className="pl-16 max-w-4xl h-screen overflow-y-scroll">
      <Header slug={props.params.slug} />
      {props.children}
    </div>
  )
}
