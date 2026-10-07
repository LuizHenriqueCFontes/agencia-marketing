type ArrowIconProps = {
  diagonal?: boolean
}

function ArrowIcon({ diagonal = false }: ArrowIconProps) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h13m-5-5 5 5-5 5" />
    </svg>
  )
}

export default ArrowIcon
