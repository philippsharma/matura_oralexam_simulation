

export default function Display({excerptText}: {excerptText: string}) {
  if (!excerptText) return null

  return (
    <p style={{whiteSpace: "pre-wrap"}}>
      {excerptText}
    </p>
  )
}
