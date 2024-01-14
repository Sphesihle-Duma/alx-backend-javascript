export default class Building {
  constructor(sqft) {
    if (new.target !== Building) throw new Error('Class extending Building must override evacuationWarningMessage');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqrt(sqft) {
    this._sqft = sqft;
  }
}
