import { useTheme } from 'next-themes'

export default {
    logo: (props) => {
        const { resolvedTheme } = useTheme()
        const src = resolvedTheme === 'dark' ? '/ultimate-white.png' : '/ultimate-black.png';
        return <img width={150} height={33} src={src}/>
    },
    project: {
        link: 'https://github.com/ultimateai'
    }
    // ... other theme options
}
