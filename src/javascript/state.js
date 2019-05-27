function defaultState() {
    return {
        previewBackground: true,
        clipboard: {
            html: false,
            css: false,
        },
        css: {
            span: {
                line_height: '1.54',
                font_size: '1',
            },
            contain: {
                padding_left: '1.8',
                margin_bottom: '.5',
            },
            input: {
                height: '1.25',
                width: '1.25',
                background: 'rgba(241, 245, 248, 1)',
                with_border: true,
                with_ripple: true,
                border_width: '1',
                border_color: 'rgba(184, 194, 204, 1)',
                checkbox: {
                    border_radius: '0.125',
                    checkmark: {
                        left: '.45',
                        top: '.18',
                        width: '.25',
                        height: '.6',
                        thickness: '2',
                    }
                },
                radio: {
                    border_radius: '2.0',
                    dot: {
                        left: '.25',
                        top: '.25',
                        width: '.75',
                        height: '.75',
                        border_radius: '2.0',
                    }
                },
                checkmark_and_dot: {
                    color: 'rgba(255, 255, 255, 1)',
                    disabled: {
                        color: 'rgba(135, 149, 161, 1)'
                    }
                },
                hover_and_focus: {
                    background: 'rgb(231, 238, 243)'
                },
                focus: {
                    outline_thickness: '2',
                    outline_color: 'rgba(52,144,220,0.5)',
                },
                checked: {
                    background: 'rgba(0, 130, 243, 1)',
                    border_color: 'rgba(0, 130, 243, 1)',
                    hover_and_focus: {
                        background: 'rgba(13, 143, 255, 1)',
                        border_color: 'rgba(13, 143, 255, 1)',
                    }
                },
                disabled: {
                    background: 'rgba(241, 245, 248, 1)',
                    border_color: 'rgba(184, 194, 204, 1)',
                    opacity: '0.6',
                },
                ripple: {
                    width: '3',
                    height: '3',
                    margin_left: '-0.85',
                    margin_top: '-0.85',
                    background: 'rgba(0, 130, 243, 1)',
                    border_radius: '2',
                    opacity: '.6',
                    scale: false,
                },
            },
        }
    }
}

export default defaultState;