import style from './Flex.module.scss'

type TProps = {
    children: React.ReactNode
    justifyContent?: "space-between" | "flex-start" | "flex-end" | "center"
    alignItems?: "flex-start" | "flex-end" | "center"
    flexDirection?: "row" | "column"
}

export const Flex = ({ children, justifyContent, alignItems, flexDirection }: TProps) => {
    return (
        <div className={style.flex} style={
            {
                justifyContent: justifyContent,
                alignItems: alignItems,
                flexDirection: flexDirection
            }}>
            {children}
        </div>
    )
}