import * as Accordion from '@radix-ui/react-accordion';

export default function TestAccordion() {
    return (
        <div className="mt-60">
            <Accordion.Root type="single" collapsible>
                <Accordion.Item value="item-1">
                    <Accordion.Header>
                        <Accordion.Trigger className="bg-gray-800 text-white p-4 w-full">
                            Click me
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="bg-gray-700 text-white p-4 data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
                        Hello, world!
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </div>
    );
}