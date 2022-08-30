const Switch = ({ onShowTab, tab, shows, restaurants }) => {
   return (
      <section className='home_switch'>
         <div onClick={e => onShowTab(e, 'upcoming')} className={`${tab === 'upcoming' ? 'active' : ''}`}>Upcoming launches</div>
         <div onClick={e => onShowTab(e, 'past')} className={`${tab === 'past' ? 'active' : ''}`}>Past launches</div>
      </section>
   )
}

export default Switch