using System.Collections.Generic;

namespace CheetahRoller.Domain
{
    public class DiceCup
    {
        public DiceCup(RollSpec spec)
        {
            //Dice = spec.Select(s => new Dice(s.))
        }
        public IEnumerable<Dice> Dice { get; set; }
    }
}