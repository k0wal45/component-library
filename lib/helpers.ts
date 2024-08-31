interface ComponentItem {
  type: string;
  icon: any;
  name: string;
  showOf: JSX.Element;
  code: string;
}

interface ComponentGroup {
  type: string;
  icon: any;
  names: string[];
}

export const groupComponentsByType = (
  components: { type: string; name: string; icon: any }[]
): ComponentGroup[] => {
  const groupedComponents: { [key: string]: ComponentGroup } = {};

  components.forEach((component) => {
    const { type, name, icon } = component;

    if (!groupedComponents[type]) {
      groupedComponents[type] = {
        type: type,
        icon: icon,
        names: [],
      };
    }

    groupedComponents[type].names.push(name);
  });

  // Convert the grouped components object to an array and sort by type
  const sortedGroups = Object.values(groupedComponents).sort((a, b) =>
    a.type.localeCompare(b.type)
  );

  // Sort names alphabetically within each group
  sortedGroups.forEach((group) => {
    group.names.sort((a, b) => a.localeCompare(b));
  });

  return sortedGroups;
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
