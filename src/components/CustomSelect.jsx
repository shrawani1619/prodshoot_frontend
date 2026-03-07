import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

function CustomSelect({ name, value, onChange, required, options, placeholder }) {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

    const handleSelect = (optionValue) => {
        // Simulate a native onChange event
        const syntheticEvent = {
            target: { name, value: optionValue }
        };
        onChange(syntheticEvent);
        setIsOpen(false);
    };

    return (
        <div className="custom-select-wrapper" ref={wrapperRef}>
            {/* Hidden native select for form validation */}
            <select
                name={name}
                value={value}
                onChange={() => { }}
                required={required}
                tabIndex={-1}
                aria-hidden="true"
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0 }}
            >
                <option value="">{placeholder}</option>
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>

            {/* Custom visible trigger */}
            <button
                type="button"
                className={`custom-select-trigger ${isOpen ? 'open' : ''} ${!value ? 'placeholder' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className="custom-select-value">{selectedLabel}</span>
                <ChevronDown size={16} className={`custom-select-arrow ${isOpen ? 'rotated' : ''}`} />
            </button>

            {/* Custom dropdown */}
            {isOpen && (
                <ul className="custom-select-dropdown" role="listbox">
                    {options.map(opt => (
                        <li
                            key={opt.value}
                            className={`custom-select-option ${value === opt.value ? 'selected' : ''}`}
                            role="option"
                            aria-selected={value === opt.value}
                            onClick={() => handleSelect(opt.value)}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CustomSelect;
