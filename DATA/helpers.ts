interface ComponentItem {
  type: string;
  name: string;
  showOf: JSX.Element;
  code: string;
}

interface ComponentGroup {
  type: string;
  names: string[];
}

export const groupComponentsByType = (
  components: { type: string; name: string }[]
): ComponentGroup[] => {
  const groupedComponents: { [key: string]: ComponentGroup } = {};

  components.forEach((component) => {
    const { type, name } = component;

    if (!groupedComponents[type]) {
      groupedComponents[type] = {
        type: type,
        names: [],
      };
    }

    groupedComponents[type].names.push(name);
  });

  return Object.values(groupedComponents);
};

export const createLink = (string: string) => {
  return string.replace(/ /g, "-").toLowerCase();
};

interface PageData {
  name: string;
  components: ComponentItem[];
}
export const filterComponentsBySlug = (array: any, slug: any) => {
  const filteredComponents: PageData = {
    name: "",
    components: [],
  };

  array.forEach((component: ComponentItem) => {
    if (createLink(component.type) === slug) {
      filteredComponents.components.push(component);
      filteredComponents.name = component.type;
    }
  });

  return filteredComponents;
};
