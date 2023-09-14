import { useTheme } from 'next-themes'

const CustomLogo = (props) => {
    const { resolvedTheme } = useTheme()
    const src = resolvedTheme === 'dark' ? '/ultimate-white.png' : '/ultimate-black.png';
    return <img width={150} height={33} src={src}/>
}
export default {
    logo: CustomLogo,
    project: {
        link: 'https://github.com/ultimateai'
    }
}
