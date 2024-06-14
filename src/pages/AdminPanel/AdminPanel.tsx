import { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar/';
import clsx from 'clsx';
import { gsap } from 'gsap';
import InlineSVG from 'react-inlinesvg';
import { ArrowDown } from '@/assets/icons/Arrow';
import { Trash } from '@/assets/icons/Trash';
import { Edit } from '@/assets/icons/Edit';
import { Folder } from '@/assets/icons/Folder';
import { Drag } from '@/assets/icons/Drag';
import { AddNew } from '@/assets/icons/AddNew';

interface BoxElement extends HTMLElement {
  _flip?: gsap.core.Timeline;
}

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<(BoxElement | null)[]>([]);

  const addToBoxesRef = (el: BoxElement | null) => {
    if (el && !boxesRef.current.includes(el)) {
      boxesRef.current.push(el);
    }
  };

  useEffect(() => {
    if (gridRef.current) {
      boxesRef.current = boxesRef.current.slice(0, 5); // Make sure we don't have more than expected refs
    }
  }, []);

  const swapToTwo = () => {
    boxesRef.current.forEach((box) => {
      if (box) {
        const parent = box.parentElement?.classList;
        if (parent && parent.contains('grid-cols-2')) {
          parent.remove('grid-cols-2');
          parent.add('grid-cols-3');
        }
      }
    });
  };

  const swapToThree = () => {
    boxesRef.current.forEach((box) => {
      if (box) {
        const parent = box.parentElement?.classList;
        if (parent && parent.contains('grid-cols-3')) {
          parent.remove('grid-cols-3');
          parent.add('grid-cols-2');
        }
      }
    });
  };

  const flip = (elements: (BoxElement | null)[], changeFunc: () => void, vars: gsap.TweenVars = {}) => {
    elements = gsap.utils.toArray(elements) as BoxElement[]; // Convert elements to an array, ensuring consistent handling.
    const tl = gsap.timeline({ onComplete: vars.onComplete, delay: (vars.delay as number) || 0 }); // Ensure delay is treated as a number.
    const bounds = elements.map((el) => el?.getBoundingClientRect()); // Capture the initial position and size of each element.

    elements.forEach((el) => {
      if (el) {
        el._flip && el._flip.progress(1);
        el._flip = tl;
      }
    });

    changeFunc();

    const copy: gsap.TweenVars = {};
    for (const p in vars) {
      if (p !== 'onComplete' && p !== 'delay') copy[p] = vars[p];
    }

    console.log(elements);
    console.log(copy);

    copy.x = (i: number, element: BoxElement) => `+=${(bounds[i]?.left ?? 0) - element.getBoundingClientRect().left}`;
    copy.y = (i: number, element: BoxElement) => `+=${(bounds[i]?.top ?? 0) - element.getBoundingClientRect().top}`;

    return tl.from(elements, copy);
  };

  const handleFlip = () => {
    if (isSidebarOpen) {
      flip(boxesRef.current, swapToTwo);
    } else {
      flip(boxesRef.current, swapToThree);
    }
  };

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} flip={() => handleFlip()}>
        <h1 className="font-600 text-24 leading-32 text-lightBlack">Manage Category Page</h1>
        <p className="mt-8 text-14 leading-22 tracking-[0.4$] text-gray">
          Is simply dummy text of the printing and typesetting industry.
        </p>

        <div ref={gridRef} className={clsx('mt-40 grid gap-16 transition-all duration-300 grid-cols-3')}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="col-span-1" ref={addToBoxesRef}>
              <ArticleCard />
            </div>
          ))}
        </div>
      </Sidebar>
    </div>
  );
};

const ArticleCard = () => {
  return (
    <div className="py-40 px-24 border border-[#F0F0F0] rounded-2 bg-white">
      <div className="flex items-center">
        <InlineSVG src={ArrowDown} />
        <InlineSVG src={Folder} className="ml-24" />
        <p className="text-16 leading-22 tracking-[0.1%] font-600 text-darkBlue ml-16">New Collection</p>

        <div className="ml-auto space-x-16 flex items-center">
          <InlineSVG src={Trash} />
          <InlineSVG src={Edit} />
        </div>
      </div>
      <div className="w-fit flex items-center mt-16 pr-56 bg-[#F7F7F7] p-4">
        <InlineSVG src={Drag} />
        <p className="text-16 leading-24 tracking-[0.2px] font-600 text-darkBlue ml-24">July Articles</p>

        <div className="ml-40 space-x-16 flex items-center">
          <InlineSVG src={Trash} />
          <InlineSVG src={Edit} />
        </div>
      </div>

      <div className="mt-56 ">
        <div className="flex items-center">
          <p className="text-16 leading-22 tracking-[0.1%] text-darkBlue ml-16">Add New Collection</p>

          <InlineSVG src={AddNew} className="ml-8 " />
        </div>
        <p className="text-14 leading-22 tracking-[0.4%] text-[#5B5D66] ml-16">
          Drag treeNode to insert after the other treeNode.
        </p>
      </div>
    </div>
  );
};

export default AdminPanel;
