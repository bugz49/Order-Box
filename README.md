# 🛠️ Case Study: Debugging Complex Animations & State

Building an interactive, multi-element animation app with React and Framer Motion came with a few tricky hurdles. Here are the 5 core bugs encountered during development and how they were solved:

# 1. Prop Name Mismatch
The Problem: Passing `animate={controls}` from the parent component, but accidentally looking for a different prop name inside the child component.
* The Solution: I Ensured prop names matched perfectly across components so the Framer Motion hooks could bind correctly.

# 2. Disconnected Event Handlers
The Problem: The `onClick={handleClick}` function was passed to the `<Container>` wrapper component, but never actually attached to the inner `<motion.button>`.
 * The Solution: Forwarded the `onClick` prop down into the button element to trigger the asynchronous animation sequence.

# 3. Misplaced Framer Motion Props
The Problem: Accidentally nesting `animate={controls}` inside a JavaScript `style={{ ... }}` object. 
* The Solution: Moved `animate` out of the style object and placed it directly as a top-level component prop (`<motion.button animate={control2} />`).

#4. State Variable Access Error
The Problem: Passing a plain string state (`user={status}`) from the parent, but trying to read it like an object (`{user.status}`) in the child view, causing rendering issues.
* The Solution: Simplified the child component to read the primitive string directly (`{user}`).

#5. Animating Non-Motion SVG Elements
* The Problem: Trying to attach animation controls (`animate={control3}`) directly onto a standard SVG `<path>` tag, which Framer Motion cannot animate directly.
* The Solution: Wrapped the SVG element inside a `<motion.div>` and targeted the control to the wrapper instead, enabling smooth group animation and shaking effects.

![App Demo Screenshot](assets/image.png);