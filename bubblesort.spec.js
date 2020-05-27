describe('Bubble Sort', function(){

  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts an array with multiple elements', function(){
    expect( bubbleSort([4,5,1])).toEqual([1,4,5]);
    expect(window.swap.calls.count()).toEqual(2);
  });

  it('handles an array with one element', function() {
    expect( bubbleSort([2])).toEqual([2]);
    // expect(window.swap.calls.count()).toEqual(0);
  })
});
