// Component for reusable buttons

// Scrolling function
export const ScrollPageDown = () => {
    console.log("page scroll");
    window.scrollBy(0, window.innerHeight);
  };

function Button({ text, runFunction, className, buttonRedirect}) {

    return (
        <div className={className} onClick={runFunction}>
            <p>{text}</p>
        </div>
    )
}

export default Button
