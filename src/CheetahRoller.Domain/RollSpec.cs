using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
//using CheetahRoller.Base;

namespace CheetahRoller.Domain
{
    public struct RollSpec
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="spec"></param>
        /// <exception cref="InvalidSpecException">When spec fails to match expected regex</exception>
        public RollSpec(string spec)
        {
            if (string.IsNullOrEmpty(spec))
            {
                throw new ArgumentException("Spec must not be empty", nameof(spec));
            }

            var match = SpecRegex.Match(spec);
            if (!match.Success)
            {
                throw new InvalidSpecException();
            }

            Dice = Enumerable.Range(0, int.Parse(match.Groups["count"].Value))
                .Select(r => new DiceSize(int.Parse(match.Groups["size"].Value)));
        }

        // 4d6
        public static readonly Regex SpecRegex = new Regex(@"^(?<count>\d+)d(?<size>\d+)$", RegexOptions.Compiled | RegexOptions.CultureInvariant | RegexOptions.IgnoreCase);

        public class InvalidSpecException : Exception
        {
        }

        public IEnumerable<DiceSize> Dice { get; set; }
    }
}