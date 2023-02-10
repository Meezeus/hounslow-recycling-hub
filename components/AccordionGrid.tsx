import { useState, useEffect, createRef } from 'react'
import RecyclingServiceAccordion from '@/components/RecyclingServiceAccordion'

export default function AccordionGrid() {
  const [openAccordionID, setOpenAccordionID] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  const redRecyclingBoxRef = createRef<HTMLDivElement>();
  const blueRecyclingBoxRef = createRef<HTMLDivElement>();
  const greenRecyclingBoxRef = createRef<HTMLDivElement>();
  const tiedCarrierBagOneRef = createRef<HTMLDivElement>();
  const tiedCarrierBagTwoRef = createRef<HTMLDivElement>();
  const foodWasteBinRef = createRef<HTMLDivElement>();
  const brownWheeledBinRef = createRef<HTMLDivElement>();
  const blackWheeledBinRef = createRef<HTMLDivElement>();
  const bulkyWasteCollectionServiceRef = createRef<HTMLDivElement>();
  const clinicalWasteCollectionServiceRef = createRef<HTMLDivElement>();
  const hounslowFurnitureRecyclingProjectRef = createRef<HTMLDivElement>();
  
  let refs = [
    redRecyclingBoxRef,
    blueRecyclingBoxRef,
    greenRecyclingBoxRef,
    tiedCarrierBagOneRef,
    tiedCarrierBagTwoRef,
    foodWasteBinRef,
    brownWheeledBinRef,
    blackWheeledBinRef,
    bulkyWasteCollectionServiceRef,
    clinicalWasteCollectionServiceRef,
    hounslowFurnitureRecyclingProjectRef
  ];

  useEffect(() => {
    // Set the min height of the accordions to 0, so that they use their default height.
    refs.forEach(ref => {
      if (ref.current) {
        ref.current!.style.minHeight = "0px";
      }
    })

    // Find the height of the tallest accordion, ignoring the one that is open.
    let max_height = 0;
    refs.forEach(ref => {
      if (ref.current?.id != openAccordionID) {
        max_height = Math.max(max_height, ref.current?.offsetHeight || 0)
      }
    })

    // Set the min height of the accordions to the max height.
    refs.forEach(ref => {
      if (ref.current) {
        ref.current!.style.minHeight = `${max_height}px`;
      }
    })
    
    // Add window listener.
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup window listener.
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [windowWidth])

  function handleClick(id: string) {
    setOpenAccordionID(id == openAccordionID ? "" : id)
  }

  return (
    <div className='accordion-grid'>
      <div className='accordion-grid-col'>
        <RecyclingServiceAccordion
          id="red-recycling-box"
          title="Red Recycling Box"
          description="The red recycling box is used to recycle plastic and metal cans."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu. Integer blandit placerat pellentesque. Nullam auctor lorem nec ante finibus venenatis. Morbi quis felis velit. Curabitur id felis ultrices, auctor mi in, viverra enim. Quisque iaculis tellus quis velit blandit consequat. Quisque in congue neque, eget lacinia elit. Cras malesuada maximus varius. Curabitur eget maximus nibh. Ut a eleifend velit, sed tempor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel sem sagittis, volutpat elit sit amet, malesuada erat."
          isOpen={openAccordionID == "red-recycling-box"}
          handleClick={handleClick}
          ref={redRecyclingBoxRef}
        />
        <RecyclingServiceAccordion
          id="blue-recycling-box"
          title="Blue Recycling Box"
          description="The blue recycling box is used to recycle card and paper."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu. Integer blandit placerat pellentesque. Nullam auctor lorem nec ante finibus venenatis. Morbi quis felis velit. Curabitur id felis ultrices, auctor mi in, viverra enim. Quisque iaculis tellus quis velit blandit consequat. Quisque in congue neque, eget lacinia elit. Cras malesuada maximus varius. Curabitur eget maximus nibh. Ut a eleifend velit, sed tempor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel sem sagittis, volutpat elit sit amet, malesuada erat."
          isOpen={openAccordionID == "blue-recycling-box"}
          handleClick={handleClick}
          ref={blueRecyclingBoxRef}
        />
        <RecyclingServiceAccordion
          id="green-recycling-box"
          title="Green Recycling Box"
          description="The green recycling box is used to recycle glass bottles and jars."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu. Integer blandit placerat pellentesque. Nullam auctor lorem nec ante finibus venenatis. Morbi quis felis velit. Curabitur id felis ultrices, auctor mi in, viverra enim. Quisque iaculis tellus quis velit blandit consequat. Quisque in congue neque, eget lacinia elit. Cras malesuada maximus varius. Curabitur eget maximus nibh. Ut a eleifend velit, sed tempor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel sem sagittis, volutpat elit sit amet, malesuada erat."
          isOpen={openAccordionID == "green-recycling-box"}
          handleClick={handleClick}
          ref={greenRecyclingBoxRef}
        />
        <RecyclingServiceAccordion
          id="tied-carrier-bag-1"
          title="Tied Carrier Bag (1)"
          description="A tied carrier bag can be used to recycle textiles and clothing."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu. Integer blandit placerat pellentesque. Nullam auctor lorem nec ante finibus venenatis. Morbi quis felis velit. Curabitur id felis ultrices, auctor mi in, viverra enim. Quisque iaculis tellus quis velit blandit consequat. Quisque in congue neque, eget lacinia elit. Cras malesuada maximus varius. Curabitur eget maximus nibh. Ut a eleifend velit, sed tempor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel sem sagittis, volutpat elit sit amet, malesuada erat."
          isOpen={openAccordionID == "tied-carrier-bag-1"}
          handleClick={handleClick}
          ref={tiedCarrierBagOneRef}
        />
        <RecyclingServiceAccordion
          id="tied-carrier-bag-2"
          title="Tied Carrier Bag (2)"
          description="A tied carrier bag can be used to recycle small electrical items."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu. Integer blandit placerat pellentesque. Nullam auctor lorem nec ante finibus venenatis. Morbi quis felis velit. Curabitur id felis ultrices, auctor mi in, viverra enim. Quisque iaculis tellus quis velit blandit consequat. Quisque in congue neque, eget lacinia elit. Cras malesuada maximus varius. Curabitur eget maximus nibh. Ut a eleifend velit, sed tempor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel sem sagittis, volutpat elit sit amet, malesuada erat."
          isOpen={openAccordionID == "tied-carrier-bag-2"}
          handleClick={handleClick}
          ref={tiedCarrierBagTwoRef}
        />
        <RecyclingServiceAccordion
          id="food-waste-bin"
          title="Food Waste Bin"
          description="The food waste bin is used to recycle food waste."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu. Integer blandit placerat pellentesque. Nullam auctor lorem nec ante finibus venenatis. Morbi quis felis velit. Curabitur id felis ultrices, auctor mi in, viverra enim. Quisque iaculis tellus quis velit blandit consequat. Quisque in congue neque, eget lacinia elit. Cras malesuada maximus varius. Curabitur eget maximus nibh. Ut a eleifend velit, sed tempor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel sem sagittis, volutpat elit sit amet, malesuada erat."
          isOpen={openAccordionID == "food-waste-bin"}
          handleClick={handleClick}
          ref={foodWasteBinRef}
        />
      </div>
      <div className='accordion-grid-col'>
        <RecyclingServiceAccordion
          id="brown-wheeled-bin"
          title="Brown Wheeled Bin"
          description="The brown wheeled bin is used to recycle garden waste."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu. Integer blandit placerat pellentesque. Nullam auctor lorem nec ante finibus venenatis. Morbi quis felis velit. Curabitur id felis ultrices, auctor mi in, viverra enim. Quisque iaculis tellus quis velit blandit consequat. Quisque in congue neque, eget lacinia elit. Cras malesuada maximus varius. Curabitur eget maximus nibh. Ut a eleifend velit, sed tempor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel sem sagittis, volutpat elit sit amet, malesuada erat."
          isOpen={openAccordionID == "brown-wheeled-bin"}
          handleClick={handleClick}
          ref={brownWheeledBinRef}
        />
        <RecyclingServiceAccordion
          id="black-wheeled-bin"
          title="Black Wheeled Bin"
          description="The black wheeled bin is used to dispose of rubbish that cannot be recycled."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu. Integer blandit placerat pellentesque. Nullam auctor lorem nec ante finibus venenatis. Morbi quis felis velit. Curabitur id felis ultrices, auctor mi in, viverra enim. Quisque iaculis tellus quis velit blandit consequat. Quisque in congue neque, eget lacinia elit. Cras malesuada maximus varius. Curabitur eget maximus nibh. Ut a eleifend velit, sed tempor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel sem sagittis, volutpat elit sit amet, malesuada erat."
          isOpen={openAccordionID == "black-wheeled-bin"}
          handleClick={handleClick}
          ref={blackWheeledBinRef}
        />
        <RecyclingServiceAccordion
          id="bulky-waste-collection-service"
          title="Bulky Waste Collection Service"
          description="The Bulky Waste Collection Service is used to remove any household waste and large items that are not suitable for the bin rubbish collection."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu. Integer blandit placerat pellentesque. Nullam auctor lorem nec ante finibus venenatis. Morbi quis felis velit. Curabitur id felis ultrices, auctor mi in, viverra enim. Quisque iaculis tellus quis velit blandit consequat. Quisque in congue neque, eget lacinia elit. Cras malesuada maximus varius. Curabitur eget maximus nibh. Ut a eleifend velit, sed tempor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel sem sagittis, volutpat elit sit amet, malesuada erat."
          isOpen={openAccordionID == "bulky-waste-collection-service"}
          handleClick={handleClick}
          ref={bulkyWasteCollectionServiceRef}
        />
        <RecyclingServiceAccordion
          id="clinical-waste-collection-service"
          title="Clinical Waste Collection Service"
          description="The Clinical Waste Collection Service can be used to collect waste that is considered as hazardous and can be infectious to others."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu. Integer blandit placerat pellentesque. Nullam auctor lorem nec ante finibus venenatis. Morbi quis felis velit. Curabitur id felis ultrices, auctor mi in, viverra enim. Quisque iaculis tellus quis velit blandit consequat. Quisque in congue neque, eget lacinia elit. Cras malesuada maximus varius. Curabitur eget maximus nibh. Ut a eleifend velit, sed tempor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel sem sagittis, volutpat elit sit amet, malesuada erat."
          isOpen={openAccordionID == "clinical-waste-collection-service"}
          handleClick={handleClick}
          ref={clinicalWasteCollectionServiceRef}
        />
        <RecyclingServiceAccordion
          id="hounslow-furniture-recycling-project"
          title="Hounslow Furniture Recycling Project"
          description="The Hounslow Furniture Recycling Project is dedicated to redistributing reusable furniture and electrical household appliances to those who may otherwise struggle to afford such items."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium orci. Aliquam nec maximus felis, nec fringilla augue. In turpis lorem, tincidunt eget mi non, lobortis condimentum turpis. Pellentesque fermentum lorem et enim vulputate varius. Nam sit amet convallis orci. Etiam lorem turpis, dignissim id sapien at, sodales finibus arcu. Curabitur auctor vehicula turpis, ac mollis neque maximus eu. Integer blandit placerat pellentesque. Nullam auctor lorem nec ante finibus venenatis. Morbi quis felis velit. Curabitur id felis ultrices, auctor mi in, viverra enim. Quisque iaculis tellus quis velit blandit consequat. Quisque in congue neque, eget lacinia elit. Cras malesuada maximus varius. Curabitur eget maximus nibh. Ut a eleifend velit, sed tempor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel sem sagittis, volutpat elit sit amet, malesuada erat."
          isOpen={openAccordionID == "hounslow-furniture-recycling-project"}
          handleClick={handleClick}
          ref={hounslowFurnitureRecyclingProjectRef}
        />
      </div>
    </div>
  )
}
