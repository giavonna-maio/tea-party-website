import { useState, useRef, useEffect } from "react";

interface DropdownProps {
    options: string[];
    onSelect?: (option: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = (): void => {
        setIsOpen((prev) => !prev);
    };

    const handleOptionClick = (value: string): void => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent): void => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="dropdown-button">
                {selectedValue || "Select an option"}
            </button>
            {isOpen && (
                <ul className="dropdown-list">
                    {options.map((option: string) => (
                        <li
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="dropdown-option"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
