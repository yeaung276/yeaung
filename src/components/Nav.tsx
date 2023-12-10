interface HeaderProps {
    onIconClicked?: () => void
}
export default function Header({onIconClicked}: HeaderProps){
    return(
        <header className="flex py-3">
            <div className="mx-2">
                <button onClick={onIconClicked}>image</button>
            </div>
            <div className="mx-2 text-center w-full">Content</div>
        </header >
    )
}