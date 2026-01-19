import React from 'react';

function InlineSvg({ src, alt, customStyle }: { src: string; alt?: string; customStyle?: React.CSSProperties }) {
    const [svg, setSvg] = React.useState<string | null>(null);
    const [failed, setFailed] = React.useState(false);

    React.useEffect(() => {
        if (!src) return;
        let mounted = true;
        fetch(src)
            .then((res) => {
                if (!res.ok) throw new Error('fetch failed');
                return res.text();
            })
            .then((text) => {
                if (mounted) {
                    text = text.replace('style="background-color: rgb(255, 255, 255);"', '');
                    setSvg(text);
                    setFailed(false);
                }
            })
            .catch(() => {
                if (mounted) setFailed(true);
            });
        return () => {
            mounted = false;
        };
    }, [src]);

    if (svg) {
        return (
            <span
                aria-hidden
                style={{ width: '100%', height: '100%', display: 'block', ...customStyle }}
                dangerouslySetInnerHTML={{ __html: svg }}
            />
        );
    }

    if (failed) {
        return <img src={src} alt={alt ?? ''} style={{ width: '100%', height: '100%', display: 'block', ...customStyle }} />;
    }

    return <span style={{ width: '100%', height: '100%', display: 'block', ...customStyle }} />;
}

export default InlineSvg;