
import Popover from '../src/js/popover';

test('popover shows', () => {
  document.body.innerHTML = '<button id="btn">Click</button>';
  const btn = document.getElementById('btn');

  const pop = new Popover(btn, 'Title', 'Text');
  pop.show();

  expect(document.querySelector('.popover')).not.toBeNull();
});

test('popover hides', () => {
  document.body.innerHTML = '<button id="btn">Click</button>';
  const btn = document.getElementById('btn');

  const pop = new Popover(btn, 'Title', 'Text');
  pop.show();
  pop.hide();

  expect(document.querySelector('.popover')).toBeNull();
});
