const DocumentationAccordionTrigger = ({title, desc}) => {
    return (
      <div className={'flex flex-col items-start text-start gap-2'}>
        <h6>{title}</h6>
        <p className={'text-sm text-muted font-normal'}>{desc}</p>
      </div>
    );
}

export default DocumentationAccordionTrigger;
