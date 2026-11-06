
export default function CodeForm({onAction}: {onAction: (formData: FormData) => Promise<void>}) {
  return (
    <form action={onAction}>
      <input name="code" type="text"/>
    </form>
  )
}
