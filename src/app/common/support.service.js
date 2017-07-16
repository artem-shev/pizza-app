export class SupportService {
  setSorter(sorter, propName) {
    const prop = propName.toLowerCase();
    if (sorter.prop === prop) {
      sorter.isReversed = !sorter.isReversed;
    } else {
      sorter.prop = prop;
      sorter.isReversed = false;
    }

    return sorter;
  }

  getSortDirection(sorter, title) {
    let direction = 'glyphicon-chevron-down';
    if (sorter.prop === title.name.toLowerCase() && !sorter.isReversed) {
      direction = 'glyphicon-chevron-up';
    }
    return direction;
  }
}
