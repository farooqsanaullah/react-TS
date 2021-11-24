

type CssComponentProps =
    {
        styles: React.CSSProperties
    }


export const CssProps = ({ styles }: CssComponentProps) => {
    return (<div style={styles}> Text from Css Props component </div>)
}